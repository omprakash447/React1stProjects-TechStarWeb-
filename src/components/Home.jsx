import React from "react";
import { AiFillAmazonCircle, AiFillGoogleCircle, AiFillInstagram, AiFillYoutube } from "react-icons/ai";



function Home() {
    return (
        <>
            <div className='home' id="home">
                <main>
                    <h1>TechyStar</h1>
                    <p>Solution to all your problem</p>
                </main>
            </div>

            <div className="home2">
                <img src="https://www.infomazeelite.com/wp-content/uploads/2022/12/MERN-Stack-Development.png" alt="Grafics" />

                <div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Qui corrupti vel alias, maiores voluptatem autem,
                        consequuntur ducimus labore provident quidem recusandae aspernatur accusantium,
                        velit ad. Nam repellendus ratione nesciunt debitis?
                    </p>
                </div>
            </div>


            <div className="home3" id="about">
                <div>
                <h1>Who we are?</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Repellendus ducimus dolore ut et quo provident laborum,
                    alias aliquid modi sunt necessitatibus nihil eligendi numquam fuga vel.
                    Iste delectus pariatur veniam ea nesciunt laudantium corrupti ipsum cumque porro possimus.
                    Recusandae tempora vel natus minus aliquid aut qui quisquam nihil
                    accusamus ratione consequuntur mollitia soluta, voluptas molestiae,
                    excepturi tempore vero neque iure rem illum eum. Cupiditate aliquam magni quaerat,
                    voluptates amet quam laudantium ut aliquid qui voluptatibus officia molestiae repudiandae in nemo
                    accusamus quae, iure eligendi dolorum quod odio facere reprehenderit corporis enim! Nam voluptatibus
                    alias enim impedit? Est inventore voluptate quae!</p>
                </div>
            </div>

            <div className="home4" id="brands">
                <div>
                    <h1>Brands</h1>
                    <article>
                        <div style={{
                            animationDelay:"0.3s"
                        }}>
                            <AiFillGoogleCircle />
                            <p>Google</p>
                        </div>

                        <div style={{
                            animationDelay:"0.5s"
                        }}>
                            <AiFillAmazonCircle />
                            <p>Amazon</p>
                        </div>

                        <div style={{
                            animationDelay:"0.7s"
                        }}>
                            <AiFillYoutube />
                            <p>Youtube</p>
                        </div>

                        <div style={{
                            animationDelay:"0.1s"
                        }}>
                            <AiFillInstagram />
                            <p>Instagram</p>
                        </div>
                    </article>
                </div>
            </div>
        </>
    )
}

export default Home;
