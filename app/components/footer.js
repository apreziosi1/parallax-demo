import React from "react"

const Footer = () => {
    return (
        <footer className="mx-auto flex justify-evenly w-1/2 lg:w-1/6 py-8 text-sand">
            <div className="flex flex-col justify-center items-center">
                <p>Art by&nbsp;</p>
                <a className='underline hover:scale-[110%] duration-300' href="https://www.freepik.com/author/liuzishan">@liuzishan</a>
            </div>
            <div className="flex flex-col justify-center items-center grow">
                <p>Design by&nbsp;</p>
                <a className='underline hover:scale-[110%] duration-300' href="https://www.labwm.com">LABWM</a>
            </div>
        </footer>
    )
}

export default Footer