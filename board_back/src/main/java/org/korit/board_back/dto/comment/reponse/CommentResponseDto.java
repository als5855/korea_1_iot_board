package org.korit.board_back.dto.comment.reponse;

import lombok.Getter;
import org.korit.board_back.entity.Comment;

@Getter
public class CommentResponseDto {
    private Long commenterId;
    private String content;

    public CommentResponseDto (Comment comment) {
        this.commenterId = comment.getCommenterId();
        this.content = comment.getContent();
    }
}
