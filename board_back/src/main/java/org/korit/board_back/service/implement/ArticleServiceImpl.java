package org.korit.board_back.service.implement;

import org.korit.board_back.dto.article.reponse.ArticleResponseDto;
import org.korit.board_back.dto.article.request.ArticleCreateRequestDto;
import org.korit.board_back.dto.article.request.ArticleUpdateRequestDto;
import org.korit.board_back.dto.auth.reponse.ResponseDto;
import org.korit.board_back.service.ArticleService;
import org.springframework.stereotype.Service;

@Service
public class ArticleServiceImpl implements ArticleService {
    @Override
    public ResponseDto<ArticleResponseDto> createArticle(Long authorId, ArticleCreateRequestDto dot) {
        return null;
    }

    @Override
    public ResponseDto<ArticleResponseDto> updateArticle(Long authorId, Long id, ArticleUpdateRequestDto dot) {
        return null;
    }

    @Override
    public ResponseDto<Void> deleteArticle(Long authorId, Long id) {
        return null;
    }

    @Override
    public ResponseDto<ArticleResponseDto> getArticle(Long id) {
        return null;
    }
}
