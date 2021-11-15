/**
 * Please finish the lesson by adding needed js:
 * - You can write code with jquery OR VanillaJs
 * - but are better to try them both, two variants are recommended for learning
 *
 * Icon classes:
 * - bi-eye-fill
 * - bi-eye-slash-fill
*/

// Jquery

$('.bi').click(function (event) {

    // change input type
    const input = $(this).parent().find('input');
    const currentType = input.attr('type');

    input.attr('type', currentType === 'text' ? 'password' : 'text');

    // Change icon style
    $(this).toggleClass('bi-eye-slash-fill')
});

// VanillaJs