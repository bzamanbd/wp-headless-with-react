<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wp-server2' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '.Tmb6i^i.#14+;@^)(%nN7[v*pLM!6v?!kicb.X:.Dd%};RE (ap(?w)Hn#m_#;3' );
define( 'SECURE_AUTH_KEY',  '9p[My9r*IGC? c?P}pT,.).!a#TDeT8!$01LfM0@te}tS<M)<{{umFNB[UmID0:=' );
define( 'LOGGED_IN_KEY',    'i o4/(At]LwxzvSR)f<m4xUA*V!Yi#mDm4X`So1L4anM_U@<~4:y(i34gxt6$6S{' );
define( 'NONCE_KEY',        'olp~<M-.o`|P3B0sWT{8NR9<^$0>J!g6:VU48$dLlxSB+aY@#7I69;h8YEYd&8f_' );
define( 'AUTH_SALT',        '@ p$B2Nz}D_{)-G}nL;4Gg7j&teb4{TU{65q;8vY7$h@{e4u/39(i9m[V4Ly^oy3' );
define( 'SECURE_AUTH_SALT', 'GTKf+Cyj,sbdjGqc=P$xf~_q65`P:snI,B]/D6&lCobjp^nci8fObH_4x|m^-Hv]' );
define( 'LOGGED_IN_SALT',   'HA*4]GBVK l_zUi >,)[dF7$pJ*J&IM<}1x|UW/(yW4y1!q5c B4oy{ VL2EJ/Dz' );
define( 'NONCE_SALT',       '=}<,^t2~ZrUhEXZ9HVWfx>.t-,^OR=m#mcGiH`/T25nI2S8ePji:!r@:DPLNv;1o' );

define('JWT_AUTH_SECRET_KEY', '+wTm|KbbS4vT`+xx-Tpeww%fE+i&:zs5*1rzD}QaeoC;-6[tHlQH)|z|%S/;CqdI');
define('JWT_AUTH_CORS_ENABLE', true);

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 *
 * At the installation time, database tables are created with the specified prefix.
 * Changing this value after WordPress is installed will make your site think
 * it has not been installed.
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/#table-prefix
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://developer.wordpress.org/advanced-administration/debug/debug-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
define('FS_METHOD','direct');
