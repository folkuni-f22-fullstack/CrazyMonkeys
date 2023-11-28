export function isValidName(name) {
    const validCharLetter = "abcdefghijklmnopqrstuvwxyzåäö- ";

    for (let i = 0; i < name.length; i++) {
        let char = name.charAt(i).toLowerCase();
        if (!validCharLetter.includes(char)) {
            return [false, "Endast bokstäver"];
        }
    }
    if (name.length < 2) {
        return [false, "Minst 2 tecken långt"];
    }
    return [true, ""];
}

export function isValidPhoneNumber(number) {
    const validPhoneFormat = "+461234567890";
    const whiteSpace = /\s/;
    if (whiteSpace.test(number)) {
        return [false, "Vänligen använd utan mellanrum"];
    }

    for (let validNumberCounter = 0; validNumberCounter < number.length; validNumberCounter++) {
        let validPhoneNumber = number.charAt(validNumberCounter);

        if (!validPhoneFormat.includes(validPhoneNumber)) {
            return [false, "Vänligen använd endast siffror"];
        }
    }
    if (number.length < 10) {
        return [false, "Minst 10 tecken"];
    } else if (number.length > 13) {
        return [false, "Inte mer än 13 tecken"];
    }
    return [true, ""];
}

export function isValidEmailAddress(mail) {
    const validEmailCharacter = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/;

    if (!validEmailCharacter.test(mail)) {
        return [false, "Ej godkänt format"];
    }
    return [true, ""];
}