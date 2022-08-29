const EventHanding01 = () =>{
    function showName() {
        console.log("Young")
    }

    function showAge(age){
        console.log(age)
    }

    function showText(tex){
        console.log(tex)
    }
    return(
        <>
            <h3>이벤트 처리01</h3>
            <p>미리 함수를 만들어 전달하는 방법</p>
            <button type="button" onClick={showName}>Show Name</button>

            <p>onClick 내부에 직접 함수작성</p>
            <p>두번째의 장점은 매개변수를 전달하기 편하다</p>
            <button type="button" onClick={
                ()=>{
                    showAge(30);
                }
            }>Show Age</button><br />
            
            <input type="text" onChange={e=>{
                const txt = e.target.value;
                showText(txt)
            }}></input><br />
            
            <input type="text" onChange={(e)=>{ console.log(e.target.value) }}></input><br />
        </>
    )
}

export default EventHanding01;