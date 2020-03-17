<Button onClick={() => alert("clicked")}>Test</Button>

const Button = styled.button(
    props => ({  
        color : "#ffffff",
        fontFamily :"Verlag B",
        background :"#232323",
        fontSize : "22px",
        padding: props.padding || "4.8px 22px",
        border: "0px"
    })
)
  