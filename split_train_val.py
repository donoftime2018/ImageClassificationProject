import os
import random
import shutil

# Configure paths and percentage split
root_path = 'dataset/pokemon'
train_path = os.path.join(root_path, 'train')
val_path = os.path.join(root_path, 'validation')
split_ratio = 0.2  # 20% of images go to validation

random.seed(42)  # For reproducibility

# For each class (subfolder)
for class_name in os.listdir(train_path):
    train_class_dir = os.path.join(train_path, class_name)
    val_class_dir = os.path.join(val_path, class_name)
    os.makedirs(val_class_dir, exist_ok=True)

    images = os.listdir(train_class_dir)
    num_val = max(1, int(len(images) * split_ratio))
    val_images = random.sample(images, num_val)

    for img in val_images:
        src = os.path.join(train_class_dir, img)
        dst = os.path.join(val_class_dir, img)
        shutil.move(src, dst)  # Moves file from train to validation

print("Split complete!")
