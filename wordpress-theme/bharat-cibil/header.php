<?php
/**
 * Header Template
 *
 * @package Bharat_Cibil
 */
?><!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<?php if ( ! has_site_icon() ) : ?>
		<link rel="icon" type="image/png" href="<?php echo esc_url( get_template_directory_uri() . '/assets/images/bharat-cibil-icon.png' ); ?>" />
	<?php endif; ?>
	<link rel="sitemap" type="application/xml" title="Sitemap" href="<?php echo esc_url( home_url( '/sitemap.xml' ) ); ?>" />
	<?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<header class="bc-header">
	<div class="bc-container bc-header-inner">
		<a class="bc-brand" href="<?php echo esc_url( home_url( '/' ) ); ?>" aria-label="<?php esc_attr_e( 'Bharat Cibil Home', 'bharat-cibil' ); ?>">
			<?php if ( has_custom_logo() ) : ?>
				<?php
				$logo_id = get_theme_mod( 'custom_logo' );
				$logo    = wp_get_attachment_image_src( $logo_id, 'full' );
				if ( $logo ) :
					?>
					<img class="custom-logo" src="<?php echo esc_url( $logo[0] ); ?>" alt="<?php echo esc_attr( get_bloginfo( 'name' ) ); ?>" />
				<?php endif; ?>
			<?php else : ?>
				<img class="custom-logo" src="<?php echo esc_url( get_template_directory_uri() . '/assets/images/bharat-cibil-logo.jpeg' ); ?>" alt="<?php echo esc_attr( get_bloginfo( 'name' ) ); ?>" />
			<?php endif; ?>
		</a>

		<nav class="bc-nav" aria-label="<?php esc_attr_e( 'Primary Navigation', 'bharat-cibil' ); ?>">
			<?php
			if ( has_nav_menu( 'primary' ) ) {
				wp_nav_menu(
					array(
						'theme_location' => 'primary',
						'container'      => false,
						'depth'          => 2,
					)
				);
			} else {
				?>
				<ul>
					<li><a href="<?php echo esc_url( home_url( '/about/' ) ); ?>">About</a></li>
					<li><a href="<?php echo esc_url( home_url( '/services/' ) ); ?>">Services</a></li>
					<li><a href="<?php echo esc_url( home_url( '/our-process/' ) ); ?>">Our Process</a></li>
					<li><a href="<?php echo esc_url( home_url( '/knowledge-centre/' ) ); ?>">Knowledge</a></li>
					<li><a href="<?php echo esc_url( home_url( '/faq/' ) ); ?>">FAQ</a></li>
				</ul>
				<?php
			}
			?>
		</nav>

		<div style="display:flex;align-items:center;gap:0.75rem;flex-shrink:0;">
			<a class="bc-btn bc-btn-primary bc-header-cta" href="<?php echo esc_url( home_url( '/contact/' ) ); ?>">
				<?php esc_html_e( 'Free Consultation', 'bharat-cibil' ); ?>
			</a>
			<button type="button" class="bc-mobile-toggle" aria-expanded="false" aria-controls="bc-mobile-drawer" aria-label="<?php esc_attr_e( 'Toggle Navigation', 'bharat-cibil' ); ?>">
				&#9776;
			</button>
		</div>
	</div>

	<div id="bc-mobile-drawer" class="bc-mobile-drawer">
		<?php
		if ( has_nav_menu( 'primary' ) ) {
			wp_nav_menu(
				array(
					'theme_location' => 'primary',
					'container'      => false,
					'depth'          => 2,
				)
			);
		} else {
			?>
			<ul>
				<li><a href="<?php echo esc_url( home_url( '/' ) ); ?>">Home</a></li>
				<li><a href="<?php echo esc_url( home_url( '/about/' ) ); ?>">About Bharat Cibil</a></li>
				<li><a href="<?php echo esc_url( home_url( '/services/' ) ); ?>">Our Services</a></li>
				<li><a href="<?php echo esc_url( home_url( '/our-process/' ) ); ?>">Our Process</a></li>
				<li><a href="<?php echo esc_url( home_url( '/client-experiences/' ) ); ?>">Client Experiences</a></li>
				<li><a href="<?php echo esc_url( home_url( '/knowledge-centre/' ) ); ?>">Knowledge Centre</a></li>
				<li><a href="<?php echo esc_url( home_url( '/faq/' ) ); ?>">FAQ</a></li>
				<li><a href="<?php echo esc_url( home_url( '/contact/' ) ); ?>">Contact Us</a></li>
			</ul>
			<?php
		}
		?>
	</div>
</header>
<main id="primary">
