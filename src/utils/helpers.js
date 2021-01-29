export function formatDate (timestamp) {
  const d = new Date(timestamp)
  const time = d.toLocaleTimeString('en-US')
  return time.substr(0, 5) + time.slice(-2) + ' | ' + d.toLocaleDateString()
}

export function formatQuestion (question) {

  function deCapitalize(s)
  {
    return s[0].toLowerCase() + s.slice(1);
  }

  function removePunctuation(s)
  {
    const lastChar=s[s.length-1];
    const punctuation=[',', '?', '.', '!', ':', ';'];
    if (punctuation.includes(lastChar)) {
      return s.substring(0, s.length - 1);
    } else {
      return s;
    }
  }
  return removePunctuation(deCapitalize(question));
}