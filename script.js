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
    const $addedElement = $(this).parent().clone(true).insertAfter($(this).parent());
});

$(document).on("click", ".delete-member", function () {
    const $target = $(this).parent();
    if ($target.parent().children(".container").length > 3) { //3というのは、CL, SL, メンバー1人、合わせて3
        $target.remove();
    }
});

$(document).on("click", "#submit", function () {
    const blob = new Blob([makePlanText()], { type: "text/plan" });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'climbing_plan.txt';
    link.click();
})

const makePlanText = () => {
    var climbingPlan = "";
    climbingPlan += "山岳愛好会雷鳥(東京大学・お茶の水女子大学公認サークル)\n";
    climbingPlan += document.getElementById("mountain").value + "計画書\n";
    climbingPlan += "作成者 " + document.getElementById("planner").value + "\n";
    climbingPlan += "■日程 " + document.getElementById("date").value + "\n";
    climbingPlan += "■山域 " + document.getElementById("area").value + "\n";
    memberNum = $("#member-list").children(".container").length;
    climbingPlan += "■メンバー(" + String(memberNum) + "人)\n";
    for (let i = 0; i < memberNum; i++) {
        if (i === 0) {
            const $baseTarget = $("#CL")
            climbingPlan += "○CL"
                + $baseTarget.find("#fullname-kanji").val() + "("
                + $baseTarget.find("#fullname-kana").val() + "/"
                + String($baseTarget.find("#age").val()) + "/"
                + $baseTarget.find("#blood-type").val() + "/"
                + String($baseTarget.find("#generation").val()) + "期)"
                + $baseTarget.find("#belong").val() + " "
                + $baseTarget.find("#tel").val() + "\n";
        }
    }
    return climbingPlan;
}

window.addEventListener("beforeunload", (event) => {
    event.preventDefault();
    event.returnValue = '入力内容が破棄されてしまいます';
});