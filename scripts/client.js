$( document ).ready( readyNow );

let count = 0;
function readyNow( ){
    $( '#generate' ).on( 'click', addDiv );
    $( 'body' ).on( 'click', '.swap', swapColors );
    $( 'body' ).on( 'click', '.delete', removeDiv );
}

function addDiv( ){
    count++;
    $( 'body' ).append( '<div class="divCount"></div>' );
    $('.divCount').last( ).append(`<p>${count}</p>`);
    $('.divCount').last( ).append(`<button class="swap">Swap</button><button class="delete">Delete</button>`);
}

function swapColors( ){
    $( this ).parent( ).toggleClass( 'yellowBackground' );
}

function removeDiv( ){
    $( this ).parent( ).remove( );
}
