import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'


let marginRight = {
  marginRight: '2px',
  backgroundColor: "#b52517"
}

let marginStyle = {
  marginBottom: "10px"
};


let removeBorder = {
  borderColor: "#242F39"
}

let warnaCard = {
  backgroundColor: "#242F39",
  color: "white"
}

function Heroes (props) {
    return (
        <div className="row">
          {
            props.list_heroes.map((hero) => {
              let img = 'https://api.opendota.com' + hero.img
              return (
                <div className="col-sm-3 col-md-2" style={marginStyle} key={hero.id}>
                  <div className="card text-center" style={removeBorder}>
                    <img className="card-img-top" src={img} alt={hero.localized_name}/>
                  <div className="card-body" style={warnaCard}>
                      <h5 className="card-title">{hero.localized_name}</h5>
                      {
                        hero.roles.map((role, index) => {
                          return (
                            <span key={index} style={marginRight} className="badge">{role}</span>
                          )
                        })
                      }
                    </div>
                    <div  style={warnaCard} className="card-footer">
                      <Link className="btn btn-primary btn-sm" to={{
                          pathname: `/hero/${hero.id}`,
                          state: { hero: hero }
                        }}>
                        Details
                    </Link>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
    )
}

const mapStateToProps = (state) => {
  return {
    list_heroes: state.heroes
  }
}


export default connect(mapStateToProps)(Heroes)
