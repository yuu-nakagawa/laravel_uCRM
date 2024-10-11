const nl2br = (str) => {
    str = str.replace(/\r\n/g, "<br />");
    str = str.replace(/(\n|\r)/g, "<br />");
    return str;
}

// 関数を別ファイルで使い回すための記述
export { nl2br }