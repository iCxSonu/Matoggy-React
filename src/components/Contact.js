
// main file below - 
const Contact = (() => {
    return (
        <div className="ml-96 mb-28">
            <h1 className="mt-10 m-4 font-bold text-3xl ml-28" >Contact us page:</h1>
            <form className="flex flex-wrap">
            <input className="border-black border m-4 p-4 rounded-lg" placeholder="Name" />
            <input className=" border-black border m-4 p-4 rounded-lg" placeholder="Message" />
            </form>

            <button className="text-lg ml-20 shadow-lg h-14 w-80  mb-3 shadow-lime-700 m-4 p-4 rounded-lg border border-black hover:bg-green-600 cursor-pointer">Submit</button>

            <h2 className="text-xl font-bold mb-5 mt-7">For Any Further Information Contact To This Number: +91 8473829600</h2>
            <h3 className="text-xl font-bold ">Join our development Whatsapp Group - For Getting The Invitation Link: <br></br> Msssage To This Number - +91 8473829600 </h3>
        </div>
    )
})

export default Contact;