import { BsSearch } from "react-icons/bs"
import AdminSidebar from "../components/AdminSidebar"
import { FaRegBell } from "react-icons/fa"
import { HiTrendingDown, HiTrendingUp } from "react-icons/hi"

const Dashboard = () => {
  return (
    <div className="adminContainer">
      <AdminSidebar/>
      <main className="dashboard">
        <div className="bar">
          <BsSearch/>
          <input type="text" 
          placeholder="Search for data,users,docs"
          />
          <FaRegBell/>
        </div>
        <section className="widgetcontainer">
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
    <div className="widgetInfo">
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
     <div className="widgetCircle" 
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

export default Dashboard