import { BsSearch } from "react-icons/bs"
import AdminSidebar from "../components/AdminSidebar"
import { FaRegBell } from "react-icons/fa"
import { HiTrendingDown, HiTrendingUp } from "react-icons/hi"
import data from "../assets/data.json"
const Dashboard = () => {
  return (
    <div className="admin-container">
      <AdminSidebar/>
      <main className="dashboard">
        <div className="bar">
          <BsSearch/>
          <input type="text" 
          placeholder="Search for data,users,docs"
          />
          <FaRegBell/>
        </div>
        <section className="widget-container">
        <WidgetItem 
        percent={-20} 
        amount={true} 
        value={3400000} 
        heading="Revenue" 
        color="blue"/>
        <WidgetItem 
        percent={50} 
        amount={false} 
        value={400} 
        heading="Users" 
        color="rgb(0 198 202)"/>
        <WidgetItem 
        percent={-40}  
        value={23000} 
        heading="Transaction" 
        color="green"/>
        <WidgetItem 
        percent={30} 
        value={1000} 
        heading="Products" 
        color="purple"/>
        </section>
        <section className="graph-container">
          <div className="revenue-chart">
            <h2>Revenue & Transactions</h2>
            {/* Graph here */}
          </div>
          <div className="dashboard-categories">
            <h2>Inventories</h2>
            <div>
              {
                data.categories.map((i)=>(
                  <CategoryItem 
                  key={i.heading}
                  color={`hsl(${i.value},${i.value*4}%,50%)`} 
                  value={i.value} 
                  heading={i.heading}/>
                ))
              }
            </div>
          </div>
        </section>
      </main>
      </div>
  )
}
interface WidgetItemProps{
  heading:string;
  value:number;
  percent:number;
  color:string;
  amount?:boolean;
}
const WidgetItem=({
  heading,
  value,
  percent,
  color,
  amount=false
}:WidgetItemProps)=>(
  <article className="widget">
    <div className="widget-info">
      <p>{heading}</p>
      <h4>{amount?`$${value}`:value}</h4>
     {
      percent>0?(
      <span className="green"><HiTrendingUp/>+{percent}%
      </span>):(
      <span className="red"><HiTrendingDown/>{percent}%
      </span>)
     } 
    </div>
    {/* conic-gradient is used to make a part of the circle */}
     <div className="widget-circle" 
     style={{
     background: `conic-gradient(
      ${color} ${Math.abs(percent)/100*360}deg,
      rgb(255,255,255) 0
     )`
     }}>
      
      <span style={{
        color,
      }}>{percent}</span>
     </div>
  </article>
)
interface CategoryItemProps{
  color:string;
  value:number;
  heading:string;
}
const CategoryItem=({color,value,heading}:CategoryItemProps)=>(
  <div className="category-item">
    <h5>{heading}</h5>
    <div>
      <div style={{
        backgroundColor:color,
        width:`${value}%`
      }}>
      </div>
    </div>
    <span>{value}%</span>
  </div>
)
export default Dashboard