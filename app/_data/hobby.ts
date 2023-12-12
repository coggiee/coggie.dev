interface Hobby {
  title: string;
  description: string[];
  icon?: string;
}

export const hobby: Hobby[] = [
  { title: '독서', description: ['소설', '자기계발서', '경제서', '역사서'] },
  { title: '영화', description: ['드라마', '액션', '코미디', 'SF'] },
  { title: '운동', description: ['헬스', '요가', '자전거', '등산'] },
];
