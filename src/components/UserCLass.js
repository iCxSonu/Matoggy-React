import React from "react";

class UserCLass extends React.Component {
    // Now for accessing the props we will use the constructor method
    constructor(props) {
        super(props)
        // creating a dummy data
        this.state = {
            userInfo: {
                name: "Sonu",
                Location: "delhi"
            }
        }


        // console.log(this.props.name +"Child Constructor")
    }
    // now making the componentDidMount as a async function
    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/akshaymarch7")
        const json = await data.json()
        console.log(json)
        // use the setstate for updation the state variable
        this.setState({
            userInfo: json,
        })


    }
    // console.log(this.props.name +"Child Component did mount")



    render() {
        // console.log(this.props.name +"Child Render")

        // destructuring the props
        // const { name, location } = this.props
        // so we dont need to write like
        // {this.props.name}
        // Now destructuring state variable
        // destructuring for the api data that we got from the api of @akshaymarch7
        // const { name,location,login } = this.state.json

        // destructuring for the json data
        const { name, location, login, avatar_url, company, created_at } = this.state.userInfo
        return (
            <div className="user-card">
                {/* first i will destructutre the props */}
                {/* const {name,location,login} = */}


                {/* Now taking the data from the api call */}
                <h1>Name : {name}</h1>
                <img src={avatar_url} />
                <h3>Location: {location}</h3>
                <h3>Login: {login}</h3>
                <h3>Company: {company}</h3>
                <h3>Created At: {created_at}</h3>


                {/* <h2>Priyotam Nunia</h2>
                <h2>Nick Name : {name}</h2>
                <h3>My Age is : {Age} <br /> My Height is : {Height} Feet</h3>
                <button onClick={() => {
                    this.setState({
                        Age: this.state.Age + 1,
                        Height: this.state.Height + 1
                    })
                }}>Increase The Age And The Height</button>
                <h2>location: {location}</h2>
                <h3>Contact Information  - Ig Handle - @__Pri.tam</h3>
                <h3>Owner Of Matoggy App</h3> */}
            </div>
        )
    }
}

export default UserCLass

