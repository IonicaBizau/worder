/**
 * worder
 * Get the words from the input text.
 *
 * @name worder
 * @function
 * @param {String} s The input string.
 * @return {Array} An array of strings representing the text words.
 */
module.exports = function worder(s) {
    return s.split(
        /[^a-z0-9A-Z_äöüßÀÁÂĂÂÃÈÉÊÌÎÍÒÓÔÕȘȚÙÚĂĐĨŨƠàáăââãèéêîìíòóôõùúășțđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềếềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹçñ]+/igm
    ).filter(Boolean);
};
