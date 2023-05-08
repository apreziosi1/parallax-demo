import React from "react"

const Footer = () => {
    return (
        <footer className="mx-auto flex justify-evenly w-1/6">
            <div className="flex flex-col justify-center items-center pb-4">
                <p>Art by&nbsp;</p>
                <a className='underline' href="https://www.freepik.com/author/liuzishan">liuzishan</a>
            </div>
            <div className="flex flex-col justify-center items-center pb-4">
                <p>Design by&nbsp;</p>
                <a className='underline' href="https://www.labwm.com">LABWM</a>
            </div>
        </footer>
    )
}

export default Footer