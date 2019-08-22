<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetPageProperty("title", "");

switch($_REQUEST['order']){
    case "DESC":
        $order = "DESC";
        $sort = "PROPERTY_".$_REQUEST['sort'];
        break;

    case "ASC":
        $order = "ASC";
        $sort = "PROPERTY_".$_REQUEST['sort'];
        break;

    default:
        $order = "ASC";
        $sort = "PROPERTY_NEW_PRICE";
}

?>

<?$APPLICATION->IncludeComponent(
    "bitrix:news",
    "auto-mileage",
    array(
        "ADD_ELEMENT_CHAIN" => "N",
        "ADD_SECTIONS_CHAIN" => "Y",
        "AJAX_MODE" => "N",
        "AJAX_OPTION_ADDITIONAL" => "",
        "AJAX_OPTION_HISTORY" => "N",
        "AJAX_OPTION_JUMP" => "N",
        "AJAX_OPTION_STYLE" => "Y",
        "BROWSER_TITLE" => "-",
        "CACHE_FILTER" => "N",
        "CACHE_GROUPS" => "Y",
        "CACHE_TIME" => "36000000",
        "CACHE_TYPE" => "N",
        "CHECK_DATES" => "Y",
        "DETAIL_ACTIVE_DATE_FORMAT" => "d.m.Y",
        "DETAIL_DISPLAY_BOTTOM_PAGER" => "Y",
        "DETAIL_DISPLAY_TOP_PAGER" => "N",
        "DETAIL_FIELD_CODE" => array(
            0 => "",
            1 => "",
        ),
        "DETAIL_PAGER_SHOW_ALL" => "Y",
        "DETAIL_PAGER_TEMPLATE" => "",
        "DETAIL_PAGER_TITLE" => "Страница",
        "DETAIL_PROPERTY_CODE" => array(
            0 => "STREET",
            1 => "GARANTY",
            2 => "ENGINE",
            3 => "COUNT_USER",
            4 => "MODEL",
            5 => "POWER",
            6 => "GRAR_TYPE",
            7 => "MILEAGE",
            8 => "CAPACITY",
            9 => "STANDART",
            10 => "PHONE",
            11 => "FUEL_TYPE",
            12 => "TRANSMISS",
            13 => "COLOR",
            14 => "NEW_PRICE",
            15 => "YEAR",
            16 => "META_DESCRIPTION",
            17 => "META_KEYWORDS",
            18 => "META_TITLE",
            19 => "SAT_SEO_TEXT",
            20 => "VIN",
            21 => "DOP",
            22 => "SPEED_TIME",
            23 => "SELECTION_PRICE",
            24 => "EMISSION",
            25 => "PROFIT",
            26 => "SEATS",
            27 => "GEAR",
            28 => "EQUIPMENT",
            29 => "MAX_WEIGHT",
            30 => "MAX_SPEED",
            31 => "MAXIMUM_TORQUE",
            32 => "FULL_WEIGHT",
            33 => "NAME_SHORT",
            34 => "NAME_DROM",
            35 => "PACK_NAME",
            36 => "AVITO_MIN_DESC",
            37 => "DESCRIDTION_AVITO_XML",
            38 => "CHAR",
            39 => "REMAINING",
            40 => "OPTIONS",
            41 => "PACKS",
            42 => "ADD_FOR_AVITO_OFFER",
            43 => "CONSUMPTION",
            44 => "DISCOUNT",
            45 => "PACK_ITEMS",
            46 => "SERVICE",
            47 => "LINK1",
            48 => "LINK2",
            49 => "PRICE_COMPLECTATION",
            50 => "PRICE_DOP",
            51 => "PRICE_OPTIONS",
            52 => "TRANSMISS_TOORBO",
            53 => "FON_IMAGES_SLIDER",
            54 => "COLOR_DROM",
            55 => "PACK_PRICE",
            56 => "PRICE_ALL",
            57 => "OLD_PRICE",
            58 => "",
        ),
        "DETAIL_SET_CANONICAL_URL" => "N",
        "DISPLAY_BOTTOM_PAGER" => "Y",
        "DISPLAY_DATE" => "Y",
        "DISPLAY_NAME" => "Y",
        "DISPLAY_PICTURE" => "Y",
        "DISPLAY_PREVIEW_TEXT" => "Y",
        "DISPLAY_TOP_PAGER" => "N",
        "FILE_404" => "",
        "FILTER_FIELD_CODE" => array(
            0 => "",
            1 => "",
        ),
        "FILTER_NAME" => "",
        "FILTER_PROPERTY_CODE" => array(
            0 => "MODEL",
            1 => "MILEAGE",
            2 => "TRANSMISS",
            3 => "NEW_PRICE",
            4 => "YEAR",
            5 => "FUEL_TYPE",
        ),
        "HIDE_LINK_WHEN_NO_DETAIL" => "N",
        "IBLOCK_ID" => "58",
        "IBLOCK_TYPE" => "products",
        "INCLUDE_IBLOCK_INTO_CHAIN" => "Y",
        "LIST_ACTIVE_DATE_FORMAT" => "d.m.Y",
        "LIST_FIELD_CODE" => array(
            0 => "",
            1 => "",
        ),
        "LIST_PROPERTY_CODE" => array(
            0 => "STREET",
            1 => "GARANTY",
            2 => "ENGINE",
            3 => "COUNT_USER",
            4 => "MODEL",
            5 => "POWER",
            6 => "GRAR_TYPE",
            7 => "MILEAGE",
            8 => "CAPACITY",
            9 => "STANDART",
            10 => "PHONE",
            11 => "FUEL_TYPE",
            12 => "TRANSMISS",
            13 => "COLOR",
            14 => "NEW_PRICE",
            15 => "YEAR",
            16 => "META_DESCRIPTION",
            17 => "META_KEYWORDS",
            18 => "META_TITLE",
            19 => "SAT_SEO_TEXT",
            20 => "VIN",
            21 => "DOP",
            22 => "SPEED_TIME",
            23 => "SELECTION_PRICE",
            24 => "EMISSION",
            25 => "PROFIT",
            26 => "SEATS",
            27 => "GEAR",
            28 => "EQUIPMENT",
            29 => "MAX_WEIGHT",
            30 => "MAX_SPEED",
            31 => "MAXIMUM_TORQUE",
            32 => "FULL_WEIGHT",
            33 => "NAME_SHORT",
            34 => "NAME_DROM",
            35 => "PACK_NAME",
            36 => "AVITO_MIN_DESC",
            37 => "DESCRIDTION_AVITO_XML",
            38 => "CHAR",
            39 => "REMAINING",
            40 => "OPTIONS",
            41 => "PACKS",
            42 => "ADD_FOR_AVITO_OFFER",
            43 => "CONSUMPTION",
            44 => "DISCOUNT",
            45 => "PACK_ITEMS",
            46 => "SERVICE",
            47 => "LINK1",
            48 => "LINK2",
            49 => "PRICE_COMPLECTATION",
            50 => "PRICE_DOP",
            51 => "PRICE_OPTIONS",
            52 => "TRANSMISS_TOORBO",
            53 => "FON_IMAGES_SLIDER",
            54 => "COLOR_DROM",
            55 => "PACK_PRICE",
            56 => "PRICE_ALL",
            57 => "OLD_PRICE",
            58 => "GALERY",
        ),
        "MESSAGE_404" => "",
        "META_DESCRIPTION" => "-",
        "META_KEYWORDS" => "-",
        "NEWS_COUNT" => "100",
        "PAGER_BASE_LINK_ENABLE" => "N",
        "PAGER_DESC_NUMBERING" => "N",
        "PAGER_DESC_NUMBERING_CACHE_TIME" => "36000",
        "PAGER_SHOW_ALL" => "N",
        "PAGER_SHOW_ALWAYS" => "N",
        "PAGER_TEMPLATE" => ".default",
        "PAGER_TITLE" => "Новости",
        "PREVIEW_TRUNCATE_LEN" => "",
        "SEF_FOLDER" => "/hpromise/avtomobili-s-probegom/",
        "SEF_MODE" => "Y",
        "SET_LAST_MODIFIED" => "N",
        "SET_STATUS_404" => "Y",
        "SET_TITLE" => "Y",
        "SHOW_404" => "Y",
        "SORT_BY1" => $sort,
        "SORT_BY2" => $sort,
        "SORT_ORDER1" => $order,
        "SORT_ORDER2" => $order,
        "USE_CATEGORIES" => "N",
        "USE_FILTER" => "Y",
        "USE_PERMISSIONS" => "N",
        "USE_RATING" => "N",
        "USE_RSS" => "N",
        "USE_SEARCH" => "N",
        "USE_SHARE" => "N",
        "COMPONENT_TEMPLATE" => "auto-mileage",
        "SEF_URL_TEMPLATES" => array(
            "news" => "",
            "section" => "",
            "detail" => "#ELEMENT_CODE#/",
        )
    ),
    false
);?>




<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>