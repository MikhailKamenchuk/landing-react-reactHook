export const destructureArrForResponsiveDesign = (arr) =>{
    let columnsAmount = arr.length <= 3 ? arr.length : 4;
    return [...Array(columnsAmount)].map((_, c) => arr.filter((n, i) => i % columnsAmount === c));
};

export const selectedHandler = (e) => {
    const targetTag = e.target;
    const list = targetTag.parentNode.parentNode.querySelectorAll('.need__selected__control');
    list.forEach(item => item.style.display = "flex");
    targetTag.style.display = 'none';
};

export const testEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(email)
};

export const testName = name => {
    return !!name && name.length >= 6
};

