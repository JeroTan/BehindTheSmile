export default ()=>{
    let cssers = [
        'hidden',
    ]

    return <>
        <div className={cssers.map(item=>item+' ')}></div>
    </>
}