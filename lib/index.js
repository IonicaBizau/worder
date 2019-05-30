/**
 * worder
 * Get the words from the input text.
 *
 * @name worder
 * @function
 * @param {String} s The input string.
 * @param {Array} additionalWordCharacters Additional characters which are accepted part of the word (default: `[]`).
 * @return {Array} An array of strings representing the text words.
 */
module.exports = function worder(s, additionalWordCharacters) {
    additionalWordCharacters = additionalWordCharacters || []
    const re = new RegExp(
        `[^${additionalWordCharacters.join("")}a-z0-9A-Z_äöüßÀÁÂĂÂÃÈÉÊÌÎÍÒÓÔÕȘȚÙÚĂĐĨŨƠàáăââãèéêîìíòóôõùúășțđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềếềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹçñ]+`
      , "igm"
    )
    return s.split(re).filter(Boolean);
};
