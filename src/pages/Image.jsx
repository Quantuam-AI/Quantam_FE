import DropdownMenu from "../components/DropDownMenu";
import ImageForm from "../components/ImageForm";
import MainNavigation from "../components/MainNavigation";

const ImagePage = () => {
    return(
        <>
            <MainNavigation />
            이미지 데이터를 저장하는 페이지 입니다.
            해야될 것 
            어떤 이미지 저장해야될지 카테고리 고르기
            그 후 카메라 열림
            이미지 전처리 증강 후 저장
            <DropdownMenu />
        </>
    );
}

export default ImagePage;