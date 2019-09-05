import React from "react"

const UserCard =({name,username,email}) =>(

    
    <article className="card" id="{name}">
      
      <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
        <h3 className="t5 s-mb-2 s-center">
          {name}
          
        </h3>
        <div className="s-mb-2 s-main-center ">
          
          {username}

        </div>
        <div className="s-main-center">
          {`$ ${email}`}
        </div>
      </div>
    </article>

)

export default UserCard