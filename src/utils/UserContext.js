import { createContext } from "react";

// So this is our global object which holds all the vaules of usercontext inside it
// this createComntext is basically comes from react libraby which holds some information which can be accessible from anywhere in the componnent
// no matter where we are how mch nested component in are it will be accessible from anywhere

const UserContext = createContext({
    loggedInfo: "Default User"
})

export default UserContext
