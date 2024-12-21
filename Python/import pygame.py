import pygame
import random

# setup
pygame.init()
screen = pygame.display.set_mode((800, 800))
screen_width = 800
screen_height = 800
clock = pygame.time.Clock()
running = True

def generate_starting_position():
    position_range = (pixel_width // 2, screen_width-pixel_width // 2, pixel_width)
    return [random.randrange(*position_range), random.randrange(*position_range)]

def reset():  
    target.center = generate_starting_position()
    snake_pixel.center = generate_starting_position()
    return [snake_pixel.copy()], 1

def is_out_of_bounds(): 
    snake_length = 1
    return snake_pixel.bottom > screen_width or snake_pixel.top < 0 or snake_pixel.left < 0 or snake_pixel.right > screen_width

pixel_width = 50
# snake 
snake_pixel = pygame.rect.Rect([0, 0, pixel_width - 2, pixel_width - 2]) 
snake_pixel.center = generate_starting_position()
snake = [snake_pixel.copy()]
snake_direction = (0, 0)
snake_length = 1

# food
target = pygame.rect.Rect([0, 0, pixel_width - 2, pixel_width - 2])
target.center = generate_starting_position()
while running:
    
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False

    screen.fill("black")

    if is_out_of_bounds():  
        snake, snake_length = reset()


    if snake_pixel.center == target.center:
        target.center = generate_starting_position()
        snake_length += 1
        snake.append(snake_pixel.copy())

    keys = pygame.key.get_pressed()
    if keys[pygame.K_w]:
        snake_direction = (0, -pixel_width)
    if keys[pygame.K_s]:
        snake_direction = (0, pixel_width)
    if keys[pygame.K_a]:
        snake_direction = (-pixel_width, 0)
    if keys[pygame.K_d]:
        snake_direction = (pixel_width, 0)

    snake_pixel.move_ip(snake_direction)
    snake.append(snake_pixel.copy())
    snake = snake[-snake_length:]

    for snake_part in snake:
        pygame.draw.rect(screen, "green", snake_part)

    pygame.draw.rect(screen, "red", target)

    pygame.display.flip()

    clock.tick(8) 

pygame.quit()
