package org.korit.board_back.service;


import org.korit.board_back.dto.article.reponse.ArticleResponseDto;
import org.korit.board_back.dto.article.request.ArticleCreateRequestDto;
import org.korit.board_back.dto.article.request.ArticleUpdateRequestDto;
import org.korit.board_back.dto.auth.reponse.ResponseDto;


public interface ArticleService {

    ResponseDto<ArticleResponseDto> createArticle(Long authordId, ArticleCreateRequestDto dot);

    ResponseDto<ArticleResponseDto> updateArticle(Long autorId, Long id, ArticleUpdateRequestDto dot);
    ResponseDto<Void> deleteArticle(Long authorId, Long id);
    ResponseDto<ArticleResponseDto> getArticle(Long id);
}
