import React from "react";

export default function HeroIntroduction() {
  return (
    <>
      <h3 className="text-base font-thin font-mono leading-tight">
        <p>
          안녕하세요! 끊임없이 고민하고 성장을 갈구하는
          <strong>FE 개발자 문휘식</strong>입니다.😃
        </p>
      </h3>
      <div className="flex flex-col gap-1 font-mono text-xs">
        <p>
          나만의 코드가 아닌{" "}
          <strong>모두가 이해할 수 있고 스스로 설명할 수 있는 코드</strong>를
          작성하려고 노력하며{" "}
          <strong>
            부족한 부분은 성장의 기회로 삼아 적극적으로 배우려고 합니다.
          </strong>
        </p>
        <p>
          항상 더 나은 코드는 없을지 <strong>개선점을 고민</strong>하면서 개발에
          임하는 동시에
          <strong>정해진 기간을 엄수</strong>하려고 노력합니다.
        </p>
      </div>
    </>
  );
}
