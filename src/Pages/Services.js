import { Link } from 'react-router-dom';
import './main.css'

const Services = ({appoint }) => {
    const { name, place, time, details, appointment_free, img } = appoint;
    return (
     <div className="col-lg-4 mt-4 mainCard">
       <div class="card  text-center" style={{'width':'20rem'}}>
  <img src={img} class="card-img-top" alt="..." />
  <div class="card-body ">
    <h5 class="fs-3 my-2 text-info">{name}</h5>
    <p className="fs-5 fw-bolder">Appointment Time : <span className="text-primary">{time}</span></p>
    <p className="my-2">Place : {place} </p>
    <p className="fs-8">Appointment-free : <span className="text-danger fs-5 fw-bold">{appointment_free}</span></p>
    <Link to="/checkAppoinment" class="btn btn-primary my-2 my-1">Take an Appointment</Link>
  </div>
</div>
     </div>
    );
};

export default Services;