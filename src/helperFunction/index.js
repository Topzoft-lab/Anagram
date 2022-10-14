export const ucWord=(word)=>{
    return word.charAt(0).toUpperCase() + word.slice(1);

}

export const shuffle = (arr) => {
    let modifiedArr = arr.sort(() => {
        return (0.5 - Math.random())
    })

    const shuffledArr = new Set(modifiedArr);
    const uniqueArr = [...shuffledArr]
    
    return uniqueArr;
}