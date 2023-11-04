const ERRORS = {
  INTERNAL_SERVER_ERR: `Internal Server Error\n서버에서 문제가 발생했습니다.\n나중에 다시 시도해 주세요.`,
  NOT_FOUND: '해당 페이지를 찾을 수 없습니다.',
  PROCESS_ERR: '요청하신 페이지를 처리하는 중 오류가 발생했습니다.',
  AUTH: {
    NEED_EMAIL: '이메일을 입력해주세요.',
    NEED_PW: '비밀번호를 입력해주세요.',
    NEED_ALL: '이메일과 비밀번호는 필수입니다.',
    EXISTING_EMAIL: '이미 가입된 이메일 주소입니다.',
    UNMATCHED_PW: '비밀번호와 일치하지 않습니다.',
    WRONG_EMAIL_PW: '이메일 주소 또는 비밀번호를 잘못 입력하셨습니다.',
    USER_NOT_FOUND: '사용자를 찾을 수 없습니다.',
    UNAUTHORIZED: '접근 권한이 없습니다.',
    NOT_FOUND_TOKEN:
      'Token을 찾을 수 없습니다.\n 로그인 정보가 유효하지 않습니다.',
    NEED_REFRESH_TOKEN: 'Refresh Token이 필요합니다.',
    INVALID_REFRESH_TOKEN: 'Refresh Token이 유효하지 않습니다.',
    INVALID_ACCESS_TOKEN: 'Access Token이 유효하지 않습니다.',
  },
  CALENDAR: {
    INVALID: {
      TITLE: 'WonderBox 이름을 입력해주세요.',
      TITLE_LENGTH: 'WonderBox 이름은 최소 2자 이상이어야 합니다.',
      CREATOR: '보내는 사람의 이름을 입력해주세요',
      DURATION: '기간을 설정해주세요',
      MIN_DURATION: '시작일은 종료일보다 과거여야 합니다(최소 2일이상)',
      OPTION: '반드시 하나의 옵션을 선택해주세요',
    },
    EMPTY_LIST: '현재 생성된 WonderBox 캘린더가 없습니다.',
    FAILED_UPDATE: '캘린더 저장에 실패했습니다.',
    FAILED_POST: '캘린더 생성에 실패했습니다.',
    UPDATE_SUCCESS: '캘린더가 정상적으로 업데이트 되었습니다.',
    POST_SUCCESS: '캘린더가 정상적으로 생성 되었습니다.',
    DELETE_SUCCESS: '캘린더가 정상적으로 삭제되었습니다.',
    INVALID_OPTION: '해당 항목을 찾을 수 없습니다.',
    NOT_FOUND: '캘린더 정보를 찾을 수 없습니다.',
    CONTENTS_NOT_FOUND: '입력한 컨텐츠 정보를 찾을 수 없습니다.',
    INVALID_FILE_TYPE: '유효한 파일 타입이 아닙니다.',
    FAILED_UPLOAD: '파일 업로드에 실패했습니다.',
  },
};

export default ERRORS;