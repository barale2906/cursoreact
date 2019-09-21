import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom"
import { addToCart,deleteFromCart } from '../../redux/actionCreators'
import { connect } from 'react-redux'



//const mayorDeEdad = edad => edad > 18
//const persona = {"nombre":"Alexander", "Apellido":"Barajas", "edad":22, "imagen":"https://drupal.ed.team/sites/default/files/styles/16_9_medium/public/imagenes-cdn-edteam/2019-07/PremiereDesdeCero.png", 
//"alt":"Este es poster"

//}

const CourseCard = ({id,title, image, price, profesor,addCourseToCart,cart,deleteCourseFromCart}) => (

    <article className="card" id="{title}">
      <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
      
      <Link to= { `/cursos/${id}` } >
        <img src={image} alt={title}/>
      </Link>
        
      </div>
      <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
        <h3 className="t5 s-mb-2 s-center">
          {title}
          
        </h3>
        <div className="s-mb-2 s-main-center card-teachers">
          <div className="card__teacher s-cross-center">
            <div className="card__avatar s-mr-1">
              <div className="circle img-container">
                <img src={image} alt=""/>
              </div>
            </div>
            <span className="small">{profesor}</span>
          </div>
         
          
        </div>
        <div className="s-main-center">
          {
            cart.find(a=>a===id)
            ?
            <button className="button--ghost-alert button--tiny" 
            onClick={()=> deleteCourseFromCart(id)}>
              Remover del carrito
            </button>
            :
            <button className="button--ghost-alert button--tiny" 
            onClick={()=> addCourseToCart(id)}>
  
              {
                
                
                `$ ${price} USD`
  
              }
            </button>
          }
         
          
        </div>
      </div>
    </article>

)

CourseCard.propTypes ={

  title: PropTypes.string,
  imagen: PropTypes.string,
  price: PropTypes.string

}

CourseCard.defaultProps ={

  title: "No hay titulo",
  imagen: "data:image/png;base64,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",
  price: "----"

}



const mapStateToProps = state =>({
  cart: state.cart
})

const mapDispatchToProps = dispatch =>({
    addCourseToCart(id) {
      dispatch(addToCart(id))

  },
  deleteCourseFromCart(id){
    dispatch(deleteFromCart(id))
  }

})

export default connect(mapStateToProps, mapDispatchToProps)(CourseCard) 