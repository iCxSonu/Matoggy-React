import UserClass from "./UserCLass"
import { Component } from "react"
import UserContext from "../utils/UserContext"
// we can also destructor the React Component
class About extends Component {
    constructor() {
        super()
        console.log("Parent Constructor")
    }
    componentDidMount() {
        console.log("Parent Component did mount")
    }
    render() {
        console.log("Parent Render")
        return (
            <div className="mt-2 shadow-lg shadow-violet-950">
                {/* <div>
                <h1>This is Our Home Page</h1>
                <h2>This is Our Matoggy App </h2>
                <h3>We have started a online food ordering app Hope you will enjoy the app</h3>
                <div className="Akshay">
                <UserClass  name={"Sonu Nunia"} location={"Delhi"} />
                    <UserClass name={"Priyotam Nunia"} location={"Assam"} />
                </div>
            </div> */}

                {/* tailwind css */}
                <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
                    <img
                        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
                        alt=""
                        className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
                    />
                    <div
                        className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
                        aria-hidden="true"
                    >
                        <div
                            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
                            style={{
                                clipPath:
                                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                            }}
                        />
                    </div>
                    <div
                        className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
                        aria-hidden="true"
                    >
                        <div
                            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
                            style={{
                                clipPath:
                                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                            }}
                        />
                    </div>
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto max-w-2xl lg:mx-0">
                            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Work with us → </h2>
                            <h2 className="mt-4 font-bold tracking-tight text-white text-4xl ">Matoggy</h2>
                            <p className="mt-6 text-lg leading-8 text-gray-300">
                                We have started a online food ordering app Hope you will enjoy the app.
                            </p>
                        </div>
                        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
                            <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
                                <h1>Open Roles →</h1>
                                <h1>Internship Program →</h1>
                                <h1>Our Values →</h1>
                                <h1>Meet Our Leadership →</h1>
                            </div>
                            <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">

                                {<div className="flex flex-col-reverse">
                                    <dt className="text-base leading-7 text-gray-300">12 Offices WorldWide</dt>
                                    <dd className="text-2xl font-bold leading-9 tracking-tight text-white">300+ Restaurants</dd>
                                </div>}

                            </dl>
                            <div>
                                <UserContext.Consumer>
                                    {
                                        ({ loggedInfo }) => <h1 className="text-white">{loggedInfo}</h1>

                                    }
                                </UserContext.Consumer>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default About


