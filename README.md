# Coggie.dev
[개인 개발 블로그](https://coggie.dev/blog)입니다.
> 현재 [dev](https://github.com/coggiee/zentechie-blog/tree/dev)브랜치에서 최신 작업을 확인하실 수 있습니다.

## 기술 스택
NextJS로 개발했으며, Hygraph(CMS)를 사용하여 동적 포스팅이 가능합니다.
|분류|스택|
|--|--|
|코어|TypeScript|
|프레임워크|NextJS 14 app router|
|스타일링|TailwindCSS|
|애니메이션|framer-motion|
|UI 라이브러리|shadcn|
|에디터|mdxeditor|
|백엔드|Hygraph + graphQL|

### 현재까지 파악된 이슈
- 포스트를 읽은 단위를 표현하는 `HorizontalProgressBar` 렌더링 위치 이슈

- <del>포스트 수정, 삭제 권한 이슈</del>
  - <del>생성자가 아니더라도 수정, 삭제가 가능함</del>


### 개선 사항
- <del>현재 포스트 수정 시, 포스트 정보 조회 API를 재호출하는데 API 호출 최적화가 필요해 보임</del>
  - <del>query string으로 포스트 정보를 수정 페이지로 넘기는 것은 불가능 -> content가 일부 잘리는 현상 발생</del>
- 컴포넌트 책임 분리
- <del>포스트 생성 관련 컴포넌트에서 약 140줄 정도를 차지하고 있음 -> Custom Hook으로 분리</del>
- <del>무한 스크롤로 전체 포스트 불러오기(`/post-detail/_components/SearchPostSection`)</del>
  - <del>현재는 `useRef`를 사용하고 있지만, `intersectionObserver`로 최적화 & Custom Hook으로 분리</del>
  - <del>또는 전체 포스트 페이지를 parallel routes로 변경하는 것도 고려 중.</del>
- <del>중복 코드 제거 (컴포넌트, 로직 등)</del>
- <del>포스트 사진 추가 기능</del>
  - <del>현재 Hygraph를 통해 image url을 받아와서 포스트에 사진을 추가하고 있지만, 대기 시간이 상대적으로 긴 단점 발견</del>
- <del>API 호출 최적화를 통해 렌더링 시간을 단축</del>

### 추가 또는 수정할 기능
- i18n을 적용한 다국어 기능 추가
- <del>전체 포스트 확인하는 기능 수정</del>
  - <del>스타일 수정으로 인해 현재는 메인 페이지에서 확인 불가</del>
- 단축키 기능
  - 즉시 포스트 생성하기, 포스트 검색하기 기능 맵핑
- <del>태그로 포스트 검색하기 기능 수정</del>
  - <del>로직 최적화 필요</del>
- 포스트 생성 후 가져오는 기능
  - revalidate로 포스트 목록을 가져오고 있으나, 이를 제거하고 `revalidateTag`를 고려 중
