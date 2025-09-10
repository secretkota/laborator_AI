const result = document.querySelector('.result')
const btn = document.querySelector('.btn')
const words = []

const word = (word) => {
    if (!word.startsWith('a')) return false

    word = word.slice(1)

    let n = 0
    let m = 0

    while (word.startsWith('abc')) {
        n++
        word = word.slice(3)
    }

    while (word.startsWith('de')) {
        m++
        word = word.slice(2)
    }

    if (word.length > 0) return false

    if ((n + m) >= 1) {
        return true
    }

    return false
}

btn.addEventListener('click', () => {
    const data = document.querySelector('.data').value

    if (!data) return false

    console.log(data)

    console.log(words)

    // if (word(data)) {
        words.push(data)
        result.innerHTML += `<li>${word(data)}</li>`
    // }


})


// "a", "abc", "ade", "aabc", "aabcabc", "aabcabcde", "adede", "adeabc", "abde", "abcde"


