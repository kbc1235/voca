import Hello from "./Hello";

const StyleCom = () =>{
    return (
        <>
        <h1> 인라인 </h1>
        <div style={{
            display:"flex",
            border:'1px solid tomato'
        }}>
           <Hello />
           <Hello />
           <Hello />
           <Hello />
           <Hello />
           <Hello />
           <Hello />
        </div>
        </>
    )
}

export default StyleCom;

