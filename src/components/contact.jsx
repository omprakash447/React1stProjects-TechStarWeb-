import React from 'react'

function Contact() {
    return (
        <div className="contact" id='contact'>
            <main>
                <h1>Contact us</h1>
                <form action="">



                    <div>
                        <span>Name</span>
                        <input type="text" id=""  placeholder='Abc'/>
                    </div>

                    <div>
                        <span>Email</span>
                        <input type="text" id=""  placeholder='Abc@gmail.com'/>
                    </div>
                    <div>
                        <span>Text</span>
                        <input type="text" id=""  placeholder="tell us about ur query..."/>
                    </div>
                    <button>Submit</button>
                </form>
            </main>
        </div>
    )
}

export default Contact
