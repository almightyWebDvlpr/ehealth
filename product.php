<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Page Title</title>
</head>
<body>

<?php
function generateBreadcrumbs($breadcrumbs) {
    echo '<div itemscope itemtype="http://schema.org/BreadcrumbList">';
    
    $count = count($breadcrumbs);
    foreach ($breadcrumbs as $index => $breadcrumb) {
        echo '<span itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem">';
        echo '<a itemprop="item" href="' . $breadcrumb['url'] . '"><span itemprop="name">' . $breadcrumb['label'] . '</span></a>';
        echo '<meta itemprop="position" content="' . ($index + 1) . '" />';
        echo '</span>';
        
        if ($index < $count - 1) {
            echo ' > ';
        }
    }

    echo '</div>';
}

// Example usage:
$breadcrumbs = [
    ['url' => 'index.php', 'label' => 'Home'],
    
    ['url' => 'product.php', 'label' => 'Product'],
];

generateBreadcrumbs($breadcrumbs);
?>

</body>
</html>
