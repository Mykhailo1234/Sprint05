let firstUpper = (str) => {
    if (str === null) {
        return ''
    } else {
        strTrim = str.trim()
        return strTrim.charAt(0).toUpperCase() + strTrim.slice(1).toLowerCase()
    }
}

module.exports = { firstUpper }