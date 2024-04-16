import React from "react";
import SkillsItem from "./SkillsItem";
import SkillsLanguage from "./SkillsLanguage";

const Skills = () => {
  return (
    <div className="pt-[4rem] md:pt-[8rem] pb-[5rem] bg-[#09101a]">
      <h1 className="heading">
        Education & <span className="text-yellow-400">Personal history</span>
      </h1>
      <div className="w-[80%] mx-auto pt-[4rem] md:pt-[8rem] grid grid-cols-1 md:grid-cols-2 gap-[2rem] items-center">
        <div>
          <SkillsItem
            title="코드스테이츠 부트캠프"
            year="2020.04 - 2020.09"
            content="기업 협업을 진행하며 많은 성장을 할 수 있었습니다. 문서화 작업은 노
션을 이용해서 마크 다운 사용에 익숙해졌고, 이슈 발생 시 이미지나 예
시를 준비해서 팀원들의 이해를 돕고 더 명확한 해결을 위한 대화를 나
눌 수 있게 되었고, 새로운 기능을 배울때는 기본 기능을 구현한 후 프
로젝트 적용하여 버그 발생을 줄이고 발생하더라도 해결하는 시간을
줄일 수 있었습니다."
          />
          <SkillsItem
            title="모라니크 재직"
            year="2021.04 - 2022.05"
            content="재 사용성이 높은 atomic 디자인을 적용해서 컴포넌트를 구현했습니
다. React Hook을 이용해 상태값을 적용했고, 추후에 custom hook
을 구현했습니다. TypeScript를 이용해서 type을 지정했습니다. 기능
이 구현되면 좀 더 다듬어진 코드를 위해 리팩토링을 진행하여 불필요
한 코드를 줄였습니다."
          />
          <SkillsLanguage
            skill1={"HTML"}
            skill2={"JAVASCRIPT"}
            skill3={"REACT"}
            level1="w-[91%]"
            level2="w-[88%]"
            level3="w-[80%]"
          />
        </div>
        <div>
          <SkillsItem
            title="오늘의 꽃 재직"
            year="2020.10 - 2021.03"
            content="업무 진행시 컴포넌트 구현하는 경우 디자인시스템이 완벽하지 않은 상황이라 언제든지 변할 수 있다는 부분을 감안해 컴포넌트를 취하여 새로운 컴포넌트를 반환하는 컴포넌트를 구현해 하나의 container에 다양한 컨텐츠을 적용할 수 있도록 구현했습니다. 반복적으로 진행되는 컨텐츠를 매번 기획하고 디자인하고 개발하는 과정을 동일하게 반복하고 있어 strapi라는 CMS를 사용해 운영팀에 사용방법을 문서화해 전달하고 컴포넌트를 원하는 방법으로 조립해서 페이지를 생성할 수 있도록 시스템화 했습니다. "
          />
          <SkillsItem
            title="번개장터"
            year="2022.08 - 재직중"
            content="번개톡을 이용해 실시간 채팅으로 유저간의 원할한 소통을 담당하고 있습니다. 이외에 사기제재, 고객센터 등의 전반적인 서비스를 담당하면 근무중입니다"
          />
          <SkillsLanguage
            skill1={"CSS"}
            skill2={"TYPESCRIPT"}
            skill3={"NEXT.JS"}
            level1="w-[91%]"
            level2="w-[88%]"
            level3="w-[80%]"
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
