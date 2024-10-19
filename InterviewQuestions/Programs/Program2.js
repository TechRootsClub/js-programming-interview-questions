function areAnagrams(str1, str2) {
    const normalizeStr = str => str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    const arrStr1 = normalizeStr(str1).split('');
    const arrStr2 = normalizeStr(str2).split('');

    const sortedStr1 = arrStr1.sort().join('');
    const sortedStr2 = arrStr2.sort().join('');

    return sortedStr1 === sortedStr2;
}

const string1 = "Eleven plus two !!";
const string2 = "Twelve plus one";

if (areAnagrams(string1, string2)) {
    console.log(`${string1} and ${string2} are anagrams.`);
} else {
    console.log(`${string1} and ${string2} are NOT anagrams.`);
}
