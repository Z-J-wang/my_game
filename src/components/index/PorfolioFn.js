(function($){
    $(window).load(function() {
        var selectedCategory;
        var $grid = $('.work').isotope({
            itemSelector: '.col-md-3',
            masonry: {
                columnWidth: '.col-md-3',
            },
            getSortData: {
                selectedCategory: function( itemElem ) {
                    return $( itemElem ).hasClass( selectedCategory ) ? 0 : 1;
                }
            }
        });
        var $items = $('.work').find('.work-item');
        $('.sort-button-group').on( 'click', '.button', function() {
            selectedCategory = $( this ).attr('data-category');
            if ( selectedCategory == 'all' ) {
                $grid.isotope({
                    sortBy: 'original-order'
                });
                $items.css({
                    opacity: 1
                });
                return;
            }
            var selectedClass = '.' + selectedCategory;
            $items.filter( selectedClass ).css({
                opacity: 1
            });
            $items.not( selectedClass ).css({
                opacity: 0.1
            });
            $grid.isotope('updateSortData');
            $grid.isotope({ sortBy: 'selectedCategory' });
        });

        $('.button-group').each( function( i, buttonGroup ) {
            var $buttonGroup = $( buttonGroup );
            $buttonGroup.on( 'click', 'li', function() {
                $buttonGroup.find('.active').removeClass('active');
                $( this ).addClass('active');
            });
        });
    });

})(jQuery);