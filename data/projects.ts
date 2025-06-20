import type { Project } from "@/types/project"

export const projects: Project[] = [
  {
    id: 1,
    title: "모션그래픽 작품",
    category: "모션 그래픽",
    shortDescription: "브랜드 아이덴티티를 표현한 모션 그래픽 인트로 영상",
    fullDescription:
      "브랜드의 핵심 가치와 아이덴티티를 시각적으로 표현한 15초 길이의 모션 그래픽 인트로 영상입니다. 유동적인 움직임과 세련된 색상 조합으로 브랜드의 현대적인 이미지를 강조했습니다.",
    image: "/project1.jpg",
    date: "2023년 5월",
    tags: ["애프터이펙트", "모션그래픽", "브랜딩"],
    tools: ["Adobe After Effects", "Adobe Illustrator"],
    link: "https://example.com/project1",
  },
  {
    id: 2,
    title: "디자인",
    category: "그래픽 디자인",
    shortDescription: "학과 프로젝트로 제작한 다양한 그래픽 디자인 작업",
    fullDescription:
      "학과 내 팀 프로젝트로 제작한 다양한 그래픽 디자인 작업입니다. 포스터, 브로슈어, 로고 등 여러 형태의 디자인을 통해 시각적 커뮤니케이션 능력을 향상시켰습니다. 포토샵과 일러스트레이터를 활용하여 제작했습니다.",
    image: "/project2.jpg",
    date: "2023년 9월",
    tags: ["그래픽디자인"],
    tools: ["Adobe Photoshop", "Adobe Illustrator"],
  },
  {
    id: 3,
    title: "3D 캐릭터 모델링",
    category: "3D 디자인",
    shortDescription: "시네마4D로 제작한 오리지널 캐릭터 모델링",
    fullDescription:
      "시네마4D를 활용하여 제작한 오리지널 캐릭터 모델링 작업입니다. 캐릭터의 개성을 살리기 위해 독특한 디자인 요소를 적용했으며, 애니메이션에 활용할 수 있도록 리깅 작업까지 완료했습니다.",
    image: "/project3.jpg",
    date: "2024년 2월",
    tags: ["3D", "캐릭터", "모델링"],
    tools: ["Cinema 4D", "Adobe Substance Painter"],
  },
]
