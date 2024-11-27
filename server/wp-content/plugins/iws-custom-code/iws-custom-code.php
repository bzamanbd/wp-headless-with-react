<?php
/*
 * @wordpress-plugin
 * Plugin Name:       Iws Custom Code
 * Description:       all the custom codes for wordpress headless cms
 * Author:            Ripon
 * Author URI:        https://wordpress.org/ripon
 * Version:           0.1.0
 * Requires at least: 5.2
 * Requires PHP:      5.6
 * Text Domain:       iws-custom-code
 * License:           GPLv2 or later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 */

if ( ! defined( 'ABSPATH' ) ) {
    header("Location: /wp-headless/server");
	die();
}

remove_filter('the_content','wpautop');
remove_filter('the_excerpt','wpautop');

add_filter('the_content', 'strip_all_tags_content');
function strip_all_tags_content($content) {
    return strip_tags($content);
}

function iwsGetFeaturedImgSrc($obj, $fieldName, $request){
    if ($obj['featured_media']) {
        $img = wp_get_attachment_image_src( $obj['featured_media'], 'full'); 
        return $img[0];
    }
    return false;
}
add_action( 'rest_api_init', function (){
   register_rest_field('post', 'featured_src',[ 
    'get_callback' => 'iwsGetFeaturedImgSrc' ,
   ]); 
});

