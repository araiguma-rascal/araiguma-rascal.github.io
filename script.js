$("#climbing-way").change(function () {
    var val = $(this).val();
    if (val === "1") {
        $("#goods-for-each").val("□ザック □ザックカバー □登山靴 □替え靴紐 □ヘッドランプ □予備電池 □雨具 □水 □行動食 □非常食 □ゴミ袋 □地図 □コンパス □レスキューシート □筆記用具 □計画書 □遭難対策マニュアル(緊急連絡カード含む) □学生証 □保険証 □現金 □マスク (□常備薬 □帽子 □カメラ □日焼け止め □除菌シート)");
    } else if (val === "2") {
        $("#goods-for-each").val("□ザック □ザックカバー □登山靴 □替え靴紐 □ヘッドランプ □予備電池 □雨具 □防寒具 □水 □行動食 □非常食 □ゴミ袋 □地図 □コンパス □レスキューシート □筆記用具 □計画書 □遭難対策マニュアル(緊急連絡カード含む) □学生証 □保険証 □現金 □マスク □軽アイゼン(□常備薬 □帽子 □カメラ □日焼け止め □除菌シート)");
    } else if (val === "3") {
        $("#goods-for-each").val("□ザック □ザックカバー □サブザック □シュラフ □マット □登山靴 □替え靴紐 □ヘッドランプ □予備電池 □雨具 □防寒具 □帽子□エマージェンシーシート □水 □行動食 □予備食 □非常食 □手袋/軍手 □ロールペーパー □ライター  □新聞紙 □コッヘル □ブキ □ゴミ袋 □地図 □コンパス□筆記用具 □計画書 □遭難対策マニュアル(緊急連絡カード含む) □学生証 □保険証 □現金 □常備薬 □日焼け止め □タオル □着替え(□カメラ □サングラス □温泉セット)");
    } else {
        $("#goods-for-each").val("");
    }
});

$(document).on("click", ".add-member", function () {
    var $addedElement = $(this).parent().clone(true).insertAfter($(this).parent());
});

$(document).on("click", ".delete-member", function () {
    var $target = $(this).parent();
    if ($target.parent().children(".container").length > 3) { //3というのは、CL, SL, メンバー1人、合わせて3
        $target.remove();
    }
});


window.addEventListener("beforeunload", (event) => {
    event.preventDefault();
    event.returnValue = '入力内容が破棄されてしまいます';
});