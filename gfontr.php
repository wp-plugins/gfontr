<?php
/*
	Plugin Name: GFontr
	Plugin URI: http://www.ai-development.com/wordpress-plugins/simple-flickr-photostream-widget
	Description: Allows you to easily include fonts from the Google WebFonts library
	Author: Benoit Gilloz
	Version: 1.2
	Author URI: http://www.ai-development.com/
 */

class gfontr {
	
	function gfontr() {

		add_action('admin_enqueue_scripts', array(&$this, 'action_admin_head'));
		add_action('admin_init', array(&$this, 'action_admin_init'));
		add_action('admin_menu', array(&$this, 'action_admin_menu'));

		if(!is_admin() && get_option('gfontr_fonts')){
			wp_enqueue_script('WebFonts', 'http://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js');
			add_action('wp_head', array(&$this, 'action_frontend_head'));
		}
	}

	function action_admin_head($hook){
		if($hook === 'appearance_page_webfont-loader'){
			wp_enqueue_script('WebFonts', 'http://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js');
			wp_enqueue_script('Gfontr', plugins_url('/gfontr-js.js', __FILE__));
		}
	}
	
	function action_admin_init() {
		register_setting( 'gfontr_options', 'gfontr_fonts');
	}
	
	function action_admin_menu() {
		add_theme_page(__('WebFont Loader','gfontr'), __('Fonts','gfontr'), 'update_plugins', 'webfont-loader', array(&$this,'display_page'));
	}
	
	function action_init() {
		//load_plugin_textdomain('gfontr', false , basename(dirname(__FILE__)).'/languages');
	}

	function action_frontend_head(){
		$fonts = get_option('gfontr_fonts');
		echo "<script type=\"text/javascript\">currentFonts = ['".implode('\',\'', $fonts)."'];	WebFont.load({google: {families: currentFonts}});</script>";
	}

	function display_page() {
		if (!current_user_can('update_plugins'))
		{
			wp_die( __('You do not have sufficient permissions to access this page.') );
		}

		if(isset($_POST['action']) && $_POST['action'] == 'update' ) {
			if(isset($_POST['gfontr_fonts'])) {
			   $updated = update_option('gfontr_fonts', $_POST['gfontr_fonts']);
			}
			else {
				$updated = update_option('gfontr_fonts', '');
			}
		}

		?>
		<div class="wrap">
			
			<?php if($fonts = get_option('gfontr_fonts')):	?>
				<script type="text/javascript">
					currentFonts = ['<?php echo implode('\',\'', $fonts); ?>'];
				</script>
			<?php endif;	?>


			<?php screen_icon(); ?>
			<h2><?php _e('WebFont Loader','gfontr')?></h2>
			<?php if ($updated === true) { ?>
				<div class="updated below-h2" id="message"><p><?php _e( '<strong>Font selection updated!</strong>' ); ?></p></div>
			<?php } ?>
			<div>
				<form method="post" action="">
				<?php settings_fields('gfontr_fonts'); ?>
				<fieldset><legend><?php _e('Select the fonts you want loaded on your site then add the corresponding css line to your stylesheet:','gfontr')?></legend>
					
					<table class="form-table">
						<tr>
							<td>
								<ul id="fonts-bucket">
									
								</ul>
							</td>
						</tr>
					</table>
				</fieldset>
				<p class="submit"><input type="submit" class="button-primary"
					value="<?php _e('Save Changes') ?>" /></p>
				</form>

			</div>
		</div>
		<?php
	}
}
/* Initialise outselves */
add_action('plugins_loaded', create_function('','global $gfontr; $gfontr = new gfontr();'));

?>
