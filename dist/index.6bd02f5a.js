imp;
/*
div id
div id 
h1

*/ // for nested we use []
const parent = React.createElement("div", {
    id: "parent"
}, [
    React.createElement("div", {
        id: "child1"
    }, [
        React.createElement("h1", {}, "i am tag 1"),
        React.createElement("h2", {}, "i am tag 2")
    ])
], [
    React.createElement("div", {
        id: "child2"
    }, [
        React.createElement("h1", {}, "i am tag 1"),
        React.createElement("h2", {}, "i am tag 2")
    ])
]);
const parent1 = React.createElement("div", {
    id: "parent"
}, [
    React.createElement("div", {
        id: "child3"
    }, [
        React.createElement("h1", {}, "Hii i am Sonu")
    ], [
        React.createElement("h2", {}, "Hii i am Sonu")
    ])
], [
    React.createElement("div", {
        id: "child4"
    }, [
        React.createElement("h1", {}, "Hii i am Sonu"),
        React.createElement("h2", {}, "Hii i am Sonu")
    ])
]);
// const heading = React.createElement("h1", {}, "Hello");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
const root1 = ReactDOM.createRoot(document.getElementById("root1"));
root1.render(parent1);
const head = React.createElement("h6", {}, "Hello i am h6");
const root4 = ReactDOM.createRoot(document.getElementById("root3"));
root4.render(head) // const head1 = React.createElement("h3", {}, "Hii i am h2")
 // const root5 = ReactDOM.createRoot(document.getElementById("root4"))
 // root5.render(head1)
 // const parent2 = React.createElement("div", { id: "parent3" }, React.createElement("div", { id: "parent4" }, [React.createElement("h1", { id: "parent3" }, "Hii am h1 sonu")]))
 // const root5 = ReactDOM.createRoot(document.getElementById("root4"))
 // root.render(parent2)
;

//# sourceMappingURL=index.6bd02f5a.js.map
