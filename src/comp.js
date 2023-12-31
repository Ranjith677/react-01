import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Card({item}) {
    return(

        <div className="col-lg-4">
          <div className="card mb-5 mb-lg-0">
             <div className="card-body">
               <h5 className="card-title text-muted text-uppercase text-center">{item.plan}</h5>
               <h6 className="card-price text-center">${item.price}<span className="period">{item.month}-month</span></h6>
               <hr/>
               <ul className="fa-ul">
              {
                item.features.map((list)=>{
                    return(<li className={!list.isEnable ?" text-muted":""}>
                        <span className="fa-li">
                            {
                                !list.isEnable ? <FontAwesomeIcon icon={faTimes}/>:<FontAwesomeIcon icon={faCheck}/>
                            }
                        </span>{list.title}
                        <span>

                            {
                                list.isBold ? <strong>{list.title}</strong> :list.title
                            }



                        </span>
                        
                        
                        
                        
                        
                        
                        
                        
                        </li>)
                        

                            
                })



              }
              
             </ul>
             <div className="d-grid">
               <a href="#" className="btn btn-primary text-uppercase">Button</a>
             </div>
          </div>
        </div>
    </div>




    )
    
}
export default Card; 