import React from 'react'

const Tours = ({tours, deleteTour}) => {
  return (
    <section>
        <div className='title'>
            <h2>Our Tours</h2>
            <div className='underline'></div>
        </div>

        <div>
            {tours.map((tour) => {
                const {id, image, name, info, price} = tour;

                return (
                    <article className='single-tour' key={id}>
                        <img src={image} alt={name}/>

                        <footer>
                            <div className='tour-info'>
                                <h4>{name}</h4>
                                <h4 className='tour-price'>${price}</h4>
                            </div>

                            <p>{info}</p>

                            <button className='btn delete-btn' onClick={() => deleteTour(id)}>Not Interested</button>
                        </footer>
                    </article>
                    
                );
            })}
        </div>
    </section>
  )
}

export default Tours